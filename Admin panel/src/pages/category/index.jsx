// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CategoryTable from 'src/views/Category/categoryTable'

const Category = () => {
  return (
    <>
     <Grid item xs={12}>
        <Card>
          <CardHeader title='Collapsible Table' titleTypographyProps={{ variant: 'h6' }} />
            <CategoryTable />
        </Card>
      </Grid>
    </>
  );
}

export default Category;
