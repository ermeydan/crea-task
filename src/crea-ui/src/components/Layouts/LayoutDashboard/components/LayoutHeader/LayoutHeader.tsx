import { Button, Header, Container } from '@mantine/core';
import { useAppDispatch } from '@crea/ui/hooks';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '@crea/ui/store';
import { CreaLogo } from '@crea/ui/components';
import './LayoutHeader.scss';

export function LayoutHeader() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogoutAction = () => {
    dispatch(logoutAction());
    navigate('/logout');
  };

  return (
    <Header height={60} mb={10} className="layout-header">
      <Container className="layout-header-container">
        <CreaLogo height={35} />
        <Button radius="xl" h={30} onClick={() => handleLogoutAction()}>
          Logout
        </Button>
      </Container>
    </Header>
  );
}
