import './LayoutHeader.scss';
import { CreaLogo } from '@crea/ui/components';
import { useAppDispatch } from '@crea/ui/hooks';
import { logoutAction } from '@crea/ui/store';
import { Button, Container, Header } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

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
        <Link to="/products">
          <CreaLogo height={35} />
        </Link>
        <Button radius="xl" h={30} onClick={() => handleLogoutAction()}>
          Logout
        </Button>
      </Container>
    </Header>
  );
}
