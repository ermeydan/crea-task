import { Button, Center, PasswordInput, Stack, Text, Title, TextInput } from '@mantine/core';
import { useFormik } from 'formik';
import { LayoutLogin } from '@crea/ui/components';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });

  return (
    <LayoutLogin>
      <Center className="login-card-container">
        <div className="login-card">
          <Stack spacing={10} mb={30}>
            <Title weight={700}>
              Bonjour
            </Title>
            <Text component="p" color="gray" size="md">
              Please login to access the platform.
            </Text>
          </Stack>

          <form onSubmit={formik.handleSubmit}>
            <Stack>
              <Stack mb={50}>
                <Stack spacing={12}>
                  <TextInput
                    id="email"
                    name="email"
                    autoComplete="email"
                    label="Email"
                    size="lg"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></TextInput>

                  <PasswordInput
                    id="password"
                    name="password"
                    autoComplete="password"
                    label="Password"
                    size="lg"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Stack>

                <Button size="xl" type="submit">
                  Login
                </Button>
              </Stack>
            </Stack>
          </form>
        </div>
      </Center>
    </LayoutLogin>
  );
}
