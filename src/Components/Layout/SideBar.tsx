import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextFieldsOutlinedIcon from "@mui/icons-material/TextFieldsOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Typography, Box } from "@mui/material";

const drawerWidth = 260;

const DrawerComponent = ({ open, setOpen }: any) => {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuSections = [
    {
      title: "Dashboard",
      items: [
        { text: "Dashboard", icon: <SpaceDashboardOutlinedIcon /> },
      ],
    },
    {
      title: "Pages",
      caption: "Pages Caption",
      items: [
        { text: "Authentication", icon: <LockOutlinedIcon /> },
      ],
    },
    {
      title: "Utilities",
      items: [
        { text: "Typography", icon: <TextFieldsOutlinedIcon /> },
        { text: "Color", icon: <PaletteOutlinedIcon /> },
        { text: "Shadow", icon: <LayersOutlinedIcon /> },
        { text: "Icons", icon: <GridViewOutlinedIcon /> },
      ],
    },
    {
      title: "",
      items: [
        { text: "Sample Page", icon: <ArticleOutlinedIcon /> },
        { text: "Documentation", icon: <MenuBookOutlinedIcon /> },
      ],
    },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, flex: 1 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              display: open ? 'block' : 'none',
              fontSize: '1.25rem',
            }}
          >
            BERRY
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider sx={{ opacity: 0.2 }} />
      
      {menuSections.map((section, sectionIndex) => (
        <Box key={sectionIndex} sx={{ mt: section.title ? 2 : 0 }}>
          {section.title && (
            <Box sx={{ px: 3, mb: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  display: open ? 'block' : 'none',
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  fontSize: '0.875rem',
                }}
              >
                {section.title}
              </Typography>
              {section.caption && (
                <Typography
                  variant="caption"
                  sx={{
                    display: open ? 'block' : 'none',
                    color: theme.palette.text.secondary,
                    fontSize: '0.75rem',
                  }}
                >
                  {section.caption}
                </Typography>
              )}
            </Box>
          )}
          <List sx={{ p: 0 }}>
            {section.items.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    mx: 1,
                    borderRadius: '8px',
                    '&:hover': {
                      bgcolor: 'rgba(94, 53, 177, 0.08)',
                    },
                    ...(open && {
                      justifyContent: "initial",
                    }),
                    ...(!open && {
                      justifyContent: "center",
                    }),
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      color: 'rgb(94, 53, 177)',
                      ...(open && {
                        mr: 2,
                      }),
                      ...(!open && {
                        mr: 0,
                      }),
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      opacity: open ? 1 : 0,
                      '& .MuiTypography-root': {
                        fontSize: '0.875rem',
                        color: 'rgb(97, 97, 97)',
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {sectionIndex < menuSections.length - 1 && <Divider sx={{ my: 1, opacity: 0.2 }} />}
        </Box>
      ))}
    </Drawer>
  );
};

export default DrawerComponent;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: '#ffffff',
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: '#ffffff',
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  minHeight: 64,
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
