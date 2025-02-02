'use client';

import { Field } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { Flex, Icon, Input, Stack, Textarea } from '@chakra-ui/react';

import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { useColorModeValue } from '@/components/ui/color-mode';
import { BiEditAlt } from 'react-icons/bi';
import { useState } from 'react';

const BASE_URL = 'http://localhost:5000';

const EditContact = ({ contact, setContacts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    address: contact.address
  });
  const handleEditContact = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.Error);
      }
      setOpen(false);
      setContacts((prevContacts) =>
        prevContacts.map((c) => (c.id === contact.id ? data.data : u))
      );

      console.log(data.message);
    } catch (err) {
      console.log(err.message);
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
            color={useColorModeValue('blue.800', 'cyan.200')}
            marginRight={'7px'}
            cursor={'pointer'}>
            <BiEditAlt />
          </Icon>
        </DialogTrigger>
        {/* Ensure each dialog's trigger and form elements are unique to avoid collisions */}
        <form onSubmit={handleEditContact} id={`edit-id-${contact.id}`}>
          <DialogContent
            bg={useColorModeValue('gray.100', 'gray.700')}
            color={useColorModeValue('gray.900', 'white')}>
            <DialogHeader>
              <DialogTitle>Edit Contact</DialogTitle>
            </DialogHeader>
            <DialogBody pb="4">
              <Stack gap="4">
                <Flex alignItems={'center'} gap={4}>
                  <Field label="Full Name">
                    <Input
                      bg={useColorModeValue('white', 'gray.800')}
                      color={useColorModeValue('gray.900', 'white')}
                      value={inputs.name}
                      onChange={(e) =>
                        setInputs((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </Field>
                  <Field label="Email">
                    <Input
                      bg={useColorModeValue('white', 'gray.800')}
                      color={useColorModeValue('gray.900', 'white')}
                      value={inputs.email}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          email: e.target.value
                        }))
                      }
                    />
                  </Field>

                  <Field label="Phone">
                    <Input
                      bg={useColorModeValue('white', 'gray.800')}
                      color={useColorModeValue('gray.900', 'white')}
                      value={inputs.phone}
                      onChange={(e) =>
                        setInputs((prev) => ({
                          ...prev,
                          phone: e.target.value
                        }))
                      }
                    />
                  </Field>
                </Flex>
                <Field label="Address">
                  <Textarea
                    resize={'none'}
                    overflowY={'hidden'}
                    value={inputs.address}
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        address: e.target.value
                      }))
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
                form={`edit-id-${contact.id}`}
                isDisabled={isLoading}>
                {isLoading ? (
                  <Flex justifyContent={'center'}>
                    <img
                      src="/spinner.gif"
                      alt="spinner"
                      height={25}
                      width={25}
                    />
                  </Flex>
                ) : (
                  'Update'
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
