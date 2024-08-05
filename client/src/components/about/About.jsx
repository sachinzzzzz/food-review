
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">About Us</Typography>
                <Typography variant="h3">Welcome to the NIT Rourkela Food Review!</Typography>
                <Text variant="h5">

                    At NIT Rourkela, we host numerous fests and events that attract students from various colleges across the country. As a visitor, finding the perfect place to eat on our expansive campus can be a daunting task. That's where our blog comes in!
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    We believe that good food is an essential part of a great campus experience. Whether you're a local student or a visitor, we invite you to join our community. Share your reviews, discover new places to eat, and make the most of your time at NIT Rourkela.

                    
                    <Box component="span" style={{ marginLeft: 5 }}>
                        
                    </Box>
                    <Box>Happy dining!</Box>
                    
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;