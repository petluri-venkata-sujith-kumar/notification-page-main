import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import Box from "@mui/joy/Box";
import CardCover from "@mui/joy/CardCover";


const UsersBanner = () => {
  return (
    <div className="flex flex-col gap-2">
      <Card variant="solid" color="primary" invertedColors>
        <CardContent orientation="horizontal">
          <CircularProgress size="lg" determinate value={20}>
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
            </SvgIcon>
          </CircularProgress>
          <CardContent>
            <Typography level="body-md">Gross profit</Typography>
            <Typography level="h2">$ 432.6M</Typography>
          </CardContent>
        </CardContent>
        <CardActions>
          <Button variant="soft" size="sm">
            Add to Watchlist
          </Button>
          <Button variant="solid" size="sm">
            See breakdown
          </Button>
        </CardActions>
      </Card>


    <section className="w-[100%]">
    <Box
        sx={{
          // transform: 'scale(0.9)',
          height :"100%",
          width : "100%",
          // perspective: "900px",
          transition: "transform 0.4s",
          "& > div, & > div > div": {
            transition: "inherit",
          },
          "&:hover": {
            "& > div": {
              transform: "rotateY(30deg)",
              "& > div:nth-child(2)": {
                transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
              },
              "& > div:nth-child(3)": {
                transform: "translate3d(45px, 50px, 40px)",
              },
            },
          },
        }}
      >
        <Card
          variant="outlined"
          sx={{
            minHeight: "245px",
            width: 290,
            backgroundColor: "#fff",
            borderColor: "#000",
          }}
        >
          <Typography level="h2" fontSize="lg" textColor="#000">
            Users
          </Typography>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              border: "1px solid",
              borderColor: "#777",
              backdropFilter: "blur(1px)",
            }}
          >
            <Typography level="h2" fontSize="lg" textColor="#fff">
              Users Cover
            </Typography>
          </CardCover>
          <CardContent
            sx={{
              alignItems: "self-end",
              justifyContent: "flex-end",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
              border: "1px solid",
              borderColor: "#000",
              backdropFilter: "blur(1px)",
            }}
          >
            <Typography level="h2" fontSize="lg" textColor="#fff" m={2}>
              Hover to see Users
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </section>
      
    </div>
  );
};

export default UsersBanner;
