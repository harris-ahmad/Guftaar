import { Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupIcon from '@mui/icons-material/Group';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Administrator Center" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="150"
            subtitle="Users"
            icon={
              <GroupIcon
                sx={{color: colors.greenAccent[600], fontSize: "55px", position:'absolute', left: "23%"}}
              />
            }
          />
        </Box>
      

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
         
          <StatBox
            title="30"
            subtitle="Coaches"
            icon={
              <CastForEducationIcon
                sx={{color: colors.greenAccent[600], fontSize: "55px", position:'absolute', left: "43%"}}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2"
            subtitle="Admins"
            icon={
              <ManageAccountsIcon
                sx={{color: colors.greenAccent[600], fontSize: "55px", position:'absolute', left: "64%"}}
              />
            }
          />
        </Box>       
      </Box>
    </Box>
  );
};

export default Dashboard;
