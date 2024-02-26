import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const SocialLinks = () => {
  return (
    <>
      <aside className="w-[100%] h-[20%] flex justify-between px-4 pt-2 border-b-2 border-green-200">
        <h1 className="text-[20px]">Social Links</h1>
        <a href="#" className="text-[blue] text-[16px]">
          View More
        </a>
      </aside>
      <aside className="scale-90 w-[100%] h-[60%] flex items-center pl-[30px]">
        <Box sx={{ "& > :not(style)": { m: 1, zIndex:1 } }}>
          <Fab variant="extended" size="small" color="primary">
            <FacebookIcon sx={{ mr: 1 }} />
            FaceBook
          </Fab>
          <Fab variant="extended" size="small" color="primary">
            <LinkedInIcon sx={{ mr: 1 }} />
            LinkedIn
          </Fab>
          <Fab variant="extended" size="small" color="primary">
            <InstagramIcon sx={{ mr: 1 }} />
            Instagram
          </Fab>
          <Fab variant="extended" size="small" color="primary">
            <MailOutlineIcon sx={{ mr: 1 }} />
            Gmail's
          </Fab>
          
        </Box>
      </aside>
      <aside className="w-[100%] h-[20%] flex justify-end relative left-4">
        <AvatarGroup total={28} style={{ opacity: 0.9, transform: "scale(0.7)",  }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </aside>
    </>
  );
};

export default SocialLinks;
