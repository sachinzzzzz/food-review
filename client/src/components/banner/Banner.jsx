
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/8777829/pexels-photo-8777829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: black;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Your NITR Food Guide</Heading>
            <SubHeading>Don't know where you can eat! dont worry, we got you.</SubHeading>
        </Image>
    )
}

export default Banner;