import React from 'react';
import { ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Button} from 'react-bootstrap';

const VolunteerInfo = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            marginBottom: '10px',
            display: 'inline-block',
            width: '400px',
            marginLeft: '60px',

        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        imageStyle: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }));

    const classes = useStyles();

    const { category, enterDate,image,_id } = props.image 

    function deleteItem (id) {
        //console.log(id)
        fetch(`https://whispering-falls-09733.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted successfully')
        })

    }

    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.imageStyle}>
                            <img className={classes.img} alt="complex" src={image} />
                           
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {category}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {(new Date(enterDate).toString('dd/MM/yyyy'))}
                            </Typography>

                            <Button onClick={()=> deleteItem(`${_id}`)} variant="danger">Cancle</Button>


                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default VolunteerInfo;