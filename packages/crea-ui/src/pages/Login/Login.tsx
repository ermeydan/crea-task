import { LayoutLogin } from '@crea/ui/components';
import { useLoginMutation } from '@crea/ui/services';
import {
  Alert,
  Button,
  Center,
  FocusTrap,
  LoadingOverlay,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import { object, string } from 'yup';

export default function Login() {
  const [loginRequest, { isLoading, isError }] = useLoginMutation();

  const loginValidationSchema = useMemo(
    () =>
      object()
        .shape({
          username: string().min(4).trim().required(),
          password: string().min(5).required(),
        })
        .strict(),
    [],
  );

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: ({ username, password }) => {
      loginRequest({ username, password });
    },
  });

  const isLoadingBtnDisabled = useMemo(() => {
    const isFormNotReady = !(formik.isValid && formik.dirty);

    return isFormNotReady;
  }, [formik.isValid, formik.dirty]);

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
            {isError && (
              <Alert title="Error!" color="red">
                Something terrible happened!
              </Alert>
            )}
          </Stack>

          <FocusTrap active={true}>
            <form onSubmit={formik.handleSubmit}>
              <Stack>
                <Stack mb={50}>
                  <Stack spacing={12}>
                    <TextInput
                      id="username"
                      name="username"
                      autoComplete="username"
                      label="Username"
                      size="lg"
                      type="text"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      data-autofocus={true}
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

                  <Button disabled={isLoadingBtnDisabled} size="xl" type="submit">
                    Login
                  </Button>
                </Stack>
              </Stack>
            </form>
          </FocusTrap>
        </div>
      </Center>
    </LayoutLogin>
  );
}
