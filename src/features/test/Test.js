import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const Test = () => {
    return (
        <Grid container spacing={2} justify="center">
            <Grid item>
                <Typography variant="h3" component="h3">
                    {"You are routed to a Test Page"}
                </Typography>
                <Link to="/" >Link to Counter Page</Link>
            </Grid>
        </Grid>
    )
};

export default Test;