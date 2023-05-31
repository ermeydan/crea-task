import { createStyles, Text, Container, Group, ActionIcon, Stack, rem } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { CreaLogoWhite } from '@crea/ui/components';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    backgroundColor: '#278EFF',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function LayoutFooter() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <CreaLogoWhite height={30} />

        <Group spacing={0} className={classes.links} position="right" noWrap={true}>
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
