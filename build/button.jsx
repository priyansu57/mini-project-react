  
  import Button from '@mui/material/Button';
  import DeleteIcon from '@mui/icons-material/Delete';
  import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
  import Fingerprint from '@mui/icons-material/Fingerprint';

export default function Material(){

    return (
       <>
            <Button variant="contained" startIcon={<DeleteIcon />}>Contained</Button>
            <Button color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
            </Button>

            <Button aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </Button>
       </> 
       
    )
}