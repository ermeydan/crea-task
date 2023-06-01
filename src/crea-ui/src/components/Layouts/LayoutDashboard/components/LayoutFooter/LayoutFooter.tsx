import { Text, Container, Group, ActionIcon, Stack } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { CreaLogoWhite } from '@crea/ui/components';
import './LayoutFooter.scss';

export function LayoutFooter() {
  return (
    <div className="layout-footer">
      <Container className="layout-footer-container">
        <CreaLogoWhite height={30} />

        <Group spacing={0} position="right" noWrap={true}>
          <Stack align="flex-end">
            <Text component="p" color="white" ta="right">
              4701 Patrick Henry Dr Building 26, <br /> Santa Clara, CA 95054
            </Text>

            <ActionIcon
              component="a"
              target="blank"
              href="https://www.linkedin.com/company/creainc"
              size="lg"
              variant="default"
            >
              <IconBrandLinkedin size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Stack>
        </Group>
      </Container>
    </div>
  );
}
