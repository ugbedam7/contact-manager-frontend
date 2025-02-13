import {
  Box,
  Container,
  Flex,
  Stack,
  Avatar,
  Card,
  Text,
  Button,
  Icon
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import EditContact from "./EditContactModal";
import { BiTrash } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../App";
import { useRef, useState } from "react";
import { MdEdit } from "react-icons/md";

const ContactDetailItem = ({ label, value }) => (
  <Flex justify="space-between" w="full">
    <Text flex={"1"} fontWeight="bold" className="view">
      {label}
    </Text>
    <Text flex={"1"} className="view">
      {value}
    </Text>
  </Flex>
);

const ContactView = ({ contact, setContact }) => {
  const navigate = useNavigate();
  const contactImgRef = useRef(null);
  const [contactImg, setContactImg] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Image format not allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size too large");
      return;
    }

    // Load the selected file and set its base64-encoded
    // string in state
    const reader = new FileReader();
    reader.onload = () => {
      setContactImg(reader.result);
    };
    reader.readAsDataURL(file);

    setSelectedFile(file);
  };

  // Update Image
  const updateContactImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact._id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
        },
        body: formData
      });

      const result = await res.json();

      contact = result.contact;
      if (!res.ok) throw new Error(result.error);

      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
      setSelectedFile(null);
    }
  };

  // Delete Contact
  const handleDeleteContact = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/contacts/${contact._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("authToken")}`
        }
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error);
      }

      toast.success(result.message);
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Centralized color and background values
  const textColor = useColorModeValue("gray.900", "white");
  const cardBgColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Stack minH={"100vh"}>
      <Container maxW={{ base: "100%", md: "600px" }}>
        <Card.Root bg={cardBgColor} px={4} borderRadius={5}>
          <Card.Body as="form" onSubmit={updateContactImage}>
            <Flex
              align="start"
              justify="space-between"
              direction={{ base: "column", sm: "row" }}
            >
              <Flex align="start" gap={6} flex={1} conta>
                <div className="position-relative p-1">
                  <Avatar.Root size={"2xl"} shape="rounded">
                    <Avatar.Fallback name={contact.firstname} />
                    <Avatar.Image src={contactImg || contact.imgUrl} />
                  </Avatar.Root>

                  <input
                    type="file"
                    hidden
                    name="image"
                    accept="image/*"
                    ref={contactImgRef}
                    onChange={handleImgChange}
                  />

                  <div className="contact-image bg-secondary rounded-circle">
                    <MdEdit
                      cursor={"pointer"}
                      size={20}
                      onClick={() => contactImgRef.current.click()}
                    />
                  </div>
                </div>

                <Box>
                  <Text className="view" fontWeight="bold" textStyle="xl">
                    {contact.firstname}
                    {""} {contact.lastname}
                  </Text>
                  <Text color={textColor} textStyle="lg" marginBottom={"0"}>
                    {contact.email}
                  </Text>
                  <Text color="#329FF3" textStyle="lg">
                    {contact.xhandle}
                  </Text>
                </Box>
              </Flex>
              {!selectedFile && (
                <Button variant={"outline"} size="md" mr={4} borderRadius={4}>
                  <Icon
                    fontSize="21px"
                    color={"tomato"}
                    cursor={"pointer"}
                    onClick={handleDeleteContact}
                  >
                    <BiTrash />
                  </Icon>
                </Button>
              )}

              {selectedFile && (
                <Button
                  size={"sm"}
                  type="submit"
                  bg={"cyan.400"}
                  borderRadius={4}
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
              )}
            </Flex>
          </Card.Body>
        </Card.Root>

        <Flex
          borderRadius={5}
          align={"center"}
          justify={"space-between"}
          mt={6}
          p={2}
          bg={cardBgColor}
          color={textColor}
        >
          <Box ml={4} fontSize="lg" fontWeight="semibold">
            Contact Details
          </Box>
          <Button variant={"outline"} size="sm" pr={"0"} borderRadius={4}>
            <EditContact contact={contact} setContact={setContact} />
          </Button>
        </Flex>

        <Box
          p={6}
          mt={2}
          height={"full"}
          borderRadius={5}
          bg={cardBgColor}
          color={textColor}
        >
          <Stack spacing={3}>
            <ContactDetailItem label="First Name" value={contact.firstname} />
            <ContactDetailItem label="Last Name" value={contact.lastname} />
            <ContactDetailItem label="Email" value={contact.email} />
            <ContactDetailItem label="Mobile" value={contact.phone} />
            <ContactDetailItem label="Address" value={contact.address} />
          </Stack>
        </Box>
      </Container>
      <ToastContainer />
    </Stack>
  );
};

export default ContactView;
