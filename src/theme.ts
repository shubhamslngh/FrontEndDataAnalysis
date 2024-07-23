import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    // Custom colors
    primary: ['#EBF5FC', '#D6EAF8', '#AED6F1', '#85C1E9', '#5DADE2', '#3498DB', '#2E86C1', '#2874A6', '#21618C', '#1B4F72'],
    secondary: ['#FCF3CF', '#F9E79F', '#F7DC6F', '#F4D03F', '#F1C40F', '#D4AC0D', '#B7950B', '#9A7D0A', '#7D6608', '#5F4C0B'],
  },
  primaryColor: 'primary',
  primaryShade: 5,
  headings: {
    fontFamily: 'Verdana, sans-serif',
    fontWeight: "700",
  },
  fontFamily: 'Arial, sans-serif',
  components: {
    Table: {
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.primary[0],
          color: theme.colors.primary[9],
        },
        thead: {
          backgroundColor: theme.colors.primary[4],
          color: theme.white,
        },
        tbody: {
          tr: {
            '&:nth-of-type(even)': {
              backgroundColor: theme.colors.primary[1],
            },
          },
        },
      }),
    },
  },
});
