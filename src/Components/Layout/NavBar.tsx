import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Box, IconButton, InputBase, Stack, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const NavBarComponent = ({
  open,
  handleDrawerOpen,
}: {
  open: boolean;
  handleDrawerOpen: () => void;
}) => {
  return (
    <NavBar
      sx={{
        bgcolor: "#FFFFFF",
        boxShadow: "none",
        borderBottom: "1px solid #EEF2F6"
      }}
      position="fixed"
      open={open}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "70px !important" }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1 }}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                color: "#5E35B1",
                bgcolor: "#EDE7F6",
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                ":hover": {
                  color: "#fff",
                  bgcolor: "#5E35B1"
                },
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon sx={{ fontSize: "1.1rem" }} />
          </IconButton>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#EEF2F6',
            borderRadius: '8px',
            width: '380px',
            height: '40px'
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              px: 2
            }}>
              <SearchIcon sx={{ color: '#8492C4', fontSize: '1.2rem' }} />
              <InputBase
                placeholder="Search..."
                sx={{
                  ml: 1,
                  flex: 1,
                  '& input': {
                    padding: '8px 0',
                    fontSize: '0.875rem',
                    color: '#364152',
                    '&::placeholder': {
                      color: '#8492C4',
                      opacity: 1
                    }
                  }
                }}
              />
            </Box>
            <IconButton
              sx={{
                mr: 1,
                color: '#5E35B1',
                bgcolor: 'rgba(94, 53, 177, 0.08)',
                borderRadius: '8px',
                width: '28px',
                height: '28px',
              }}
            >
              <TuneIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>
        </Stack>

        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            sx={{
              color: '#5E35B1',
              borderRadius: '8px',
              backgroundColor: "rgba(94, 53, 177, 0.08)",
              padding: '8px',
            }}
          >
            <NotificationsNoneOutlinedIcon sx={{ fontSize: '1.2rem' }} />
          </IconButton>
          <Box sx={{ bgcolor: "rgba(94, 53, 177, 0.08)", borderRadius: "24px" }}>
            <IconButton
              size="small"
              sx={{
                color: '#8492C4',
                borderRadius: '8px',
                padding: '8px',
                '&:hover': {
                  bgcolor: 'transparent'
                }
              }}
            >
              <AccountCircleOutlinedIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
            <IconButton
              size="small"
              sx={{
                color: '#8492C4',
                borderRadius: '8px',
                padding: '8px',
                '&:hover': {
                  bgcolor: 'transparent'
                }
              }}
            >
              <SettingsOutlinedIcon sx={{ fontSize: '1.2rem' }} />
            </IconButton>
          </Box>

        </Stack>
      </Toolbar>
    </NavBar>
  );
};

export default NavBarComponent;

const NavBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));
