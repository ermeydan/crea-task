import { Button, Center, LoadingOverlay, PasswordInput, Stack, Text, Title, TextInput } from '@mantine/core';
import { useFormik } from 'formik';
import { useLoginMutation } from '@crea/ui/services';
import { LayoutLogin } from '@crea/ui/components';

export default function Login() {
  const [loginRequest, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }) => {
      loginRequest({ username, password });
    },
  });

  return (
    <LayoutLogin>
      <Center className="login-card-container">
        <LoadingOverlay visible={isLoading} overlayBlur={2} />

        <div className="login-card">
          <Stack spacing={10} mb={30}>
            <Title weight={700}>Bonjour</Title>
            <Text component="p" color="gray" size="md">
              Please login to access the platform.
            </Text>
          </Stack>

          <form onSubmit={formik.handleSubmit}>
            <Stack>
              <Stack mb={50}>
                <Stack spacing={12}>
                  <TextInput
                    id="username"
                    name="username"
                    autoComplete="email"
                    label="Username"
                    size="lg"
                    type="text"
                    value={formik.values.username}
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
