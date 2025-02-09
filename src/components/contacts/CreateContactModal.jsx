"use client";

import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Flex, Grid, Input, Stack, Textarea } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
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
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../App";

const CreateContactModal = ({ setContacts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    address: "",
    phone: "",
    xhandle: ""
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const imgRef = useRef(null);

  // Centralized color and background values
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.900", "white");
  const dialogBgColor = useColorModeValue("gray.100", "gray.700");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();

    formData.append("fullname", inputs.fullname);
    formData.append("email", inputs.email);
    formData.append("phone", inputs.phone);
    formData.append("address", inputs.address);
    formData.append("xhandle", inputs.xhandle);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      const res = await fetch(`${BASE_URL}/api/contacts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
        },
        body: formData
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }

      setContacts((prevContacts) => [...prevContacts, result.newContact]);

      setInputs({
        fullname: "",
        email: "",
        address: "",
        phone: "",
        xhandle: ""
      });
      setSelectedFile(null);
      imgRef.current.value = null;
      toast.success(result.message);
      setOpen(false);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <>
      <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <BiAddToQueue />
          </Button>
        </DialogTrigger>
        <DialogContent
          as="form"
          bg={dialogBgColor}
          color={textColor}
          onSubmit={handleCreateUser}
        >
          <DialogHeader>
            <DialogTitle>Add Contact</DialogTitle>
          </DialogHeader>
          <DialogBody pb="4">
            <Stack gap="4">
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                <Field label="FullName">
                  <Input
                    bg={bgColor}
                    color={textColor}
                    placeholder="John Doe"
                    value={inputs.fullname}
                    onChange={(e) =>
                      setInputs({ ...inputs, fullname: e.target.value })
                    }
                  />
                </Field>
                <Field label="Email">
                  <Input
                    bg={bgColor}
                    color={textColor}
                    placeholder="test@example.com"
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
                    placeholder="222555000"
                    value={inputs.phone}
                    onChange={(e) =>
                      setInputs({ ...inputs, phone: e.target.value })
                    }
                  />
                </Field>

                <Field label="Xhandle">
                  <Input
                    bg={bgColor}
                    color={textColor}
                    placeholder="@ugbedam"
                    value={inputs.xhandle}
                    onChange={(e) =>
                      setInputs({ ...inputs, xhandle: e.target.value })
                    }
                  />
                </Field>
              </Grid>
              <Field label="Address">
                <Textarea
                  resize={"none"}
                  overflowY={"hidden"}
                  placeholder="#345 Park Avenue, New York, USA"
                  value={inputs.address}
                  onChange={(e) =>
                    setInputs({ ...inputs, address: e.target.value })
                  }
                />
              </Field>

              <Field label="Upload Image">
                <CiImageOn
                  cursor={"pointer"}
                  size={30}
                  onClick={() => imgRef.current.click()}
                />
              </Field>

              <input
                type="file"
                accept="image/*"
                hidden
                name="image"
                // Assigns the DOM node of the input element to
                // imgRef.current, imgRef.current now points to the
                // <input> element in the DOM
                ref={imgRef} //imgRef.current references the element it's attached to.
                onChange={handleImgChange}
              />
            </Stack>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <Button
              bg="cyan.400"
              type="submit"
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
                "Add"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default CreateContactModal;
