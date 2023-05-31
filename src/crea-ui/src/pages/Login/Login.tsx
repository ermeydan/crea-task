import { Button, Center, PasswordInput, Stack, TextInput } from '@mantine/core';
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
      </Center>
    </LayoutLogin>
  );
}
