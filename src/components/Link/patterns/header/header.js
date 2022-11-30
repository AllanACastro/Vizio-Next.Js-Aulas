import { theme } from '../../../../theme/theme';
import { Box, Text } from '../../../../theme/components';

export default function Header() {
  return (
    <Box
      as="header"
      styleSheet={{
        backgroundColor: theme.colors.neutral[100]
      }}
    >
      <Box
        styleSheet={{
          overflow:"hidden",
          maxWidth: theme.space.xcontainer_xl,
          marginLeft: "auto",
          marginRight:"auto",
          paddingVertical:{
            xs: theme.space.x5,
          },
          paddingHorizontal:{
            xs: theme.space.x4,
            sm: theme.space.x6,
            lg: theme.space.x8,
          },
        }}
      >
        <Text
          as="p"
          styleSheet={{
            textVariant: theme.typography.variants.body2,
            textAlign: "center",
            color: theme.colors.neutral[999],
          }}
        >
        Bem vindo a Vizio. aqui vai um menu.
        </Text>
      </Box>
    </Box>
  )
}