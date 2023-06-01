import { Button, Center, Stack, Text, Title } from '@mantine/core';
import { LayoutLogin } from '@crea/ui/components';
import { Link } from 'react-router-dom';

export default function Logout() {
  return (
    <LayoutLogin>
      <Center className="login-card-container">
        <div className="login-card">
          <Stack spacing={10} mb={30}>
            <Title weight={700}>Logged Out</Title>
            <Text component="p" color="gray" size="md">
              Thank you for using <strong>Crea</strong>
            </Text>
            <Link to="/login">
              <Button>Go to Login</Button>
            </Link>
          </Stack>
        </div>
      </Center>
    </LayoutLogin>
  );
}
