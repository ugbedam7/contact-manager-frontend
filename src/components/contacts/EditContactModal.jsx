"use client";

import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Flex, Grid, Icon, Input, Stack, Textarea } from "@chakra-ui/react";

import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

import { useColorModeValue } from "@/components/ui/color-mode";
import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../App";

const EditContact = ({ contact, setContact, setContacts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    firstname: contact.firstname,
    lastname: contact.lastname,
    email: contact.email,
    phone: contact.phone,
    address: contact.address,
    xhandle: contact.xhandle
  });

  // Centralized color and background values
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const dialogBgColor = useColorModeValue("gray.100", "gray.700");

  const handleEditContact = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
        },
        body: JSON.stringify(inputs)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }
      toast.success(result.message);
      setOpen(false);
      // This ensures the UI reflects the changes without
      // requiring a full page reload.
      // Only update the contacts state if setContacts is provided
      if (setContacts) {
        setContacts((prevContacts) =>
          prevContacts.map((c) =>
            c._id === contact._id ? result.updatedContact : c
          )
        );
      }

      // Update the contact state in ContactDetails
      if (setContact) {
        setContact(result.updatedContact);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DialogTrigger asChild>
          <Icon
            fontSize="21px"
            color={useColorModeValue("blue.800", "cyan.200")}
            cursor={"pointer"}
          >
            <BiEditAlt />
          </Icon>
        </DialogTrigger>
        {/* Ensure each dialog's trigger and form elements are unique to avoid collisions */}
        <form onSubmit={handleEditContact} id={`edit-id-${contact._id}`}>
          <DialogContent bg={dialogBgColor} color={textColor}>
            <DialogHeader>
              <DialogTitle>Edit Contact</DialogTitle>
            </DialogHeader>
            <DialogBody pb="4">
              <Stack gap="4">
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                  <Field label="Firstname">
                    <Input
                      bg={bgColor}
                      color={textColor}
                      value={inputs.firstname}
                      onChange={(e) =>
                        setInputs({ ...inputs, firstname: e.target.value })
                      }
                    />
                  </Field>

                  <Field label="Lastname">
                    <Input
                      bg={bgColor}
                      color={textColor}
                      value={inputs.lastname}
                      onChange={(e) =>
                        setInputs({ ...inputs, lastname: e.target.value })
                      }
                    />
                  </Field>

                  <Field label="Email">
                    <Input
                      bg={bgColor}
                      color={textColor}
                      type="email"
                      value={inputs.email}
                      onChange={(e) =>
                        setInputs({ ...inputs, email: e.target.value })
                      }
                    />
                  </Field>
                  <Field label="Phone">
                    <Input
                      bg={bgColor}
                      color={textColor}
                      type="tel"
                      value={inputs.phone}
                      onChange={(e) =>
                        setInputs({ ...inputs, phone: e.target.value })
                      }
                    />
                  </Field>
                  <Field label="XHandle">
                    <Input
                      bg={bgColor}
                      color={textColor}
                      value={inputs.xhandle}
                      onChange={(e) =>
                        setInputs({ ...inputs, xhandle: e.target.value })
                      }
                    />
                  </Field>
                </Grid>
                <Field label="Address">
                  <Textarea
                    resize="none"
                    value={inputs.address}
                    onChange={(e) =>
                      setInputs({ ...inputs, address: e.target.value })
                    }
                  />
                </Field>
              </Stack>
            </DialogBody>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button
                bg="cyan.400"
                type="submit"
                form={`edit-id-${contact._id}`}
                isDisabled={isLoading}
                borderRadius={5}
              >
                {isLoading ? (
                  <Flex justifyContent={"center"}>
                    <img
                      src="/spinner.gif"
                      alt="spinner"
                      height={25}
                      width={25}
                    />
                  </Flex>
                ) : (
                  "Update"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </DialogRoot>
    </>
  );
};

export default EditContact;
