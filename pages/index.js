import { Grid, Button } from "@material-ui/core";
import Link from "next/link";

export default function Home()
{
	const routes = [
		{ url:"/login", title: "Login" },
		{ url:"/compras", title: "Compras" },
		{ url:"/compras/nova", title: "Nova Compra" },
		{ url:"/cashback", title: "Cashback" },
		{ url:"/revendedor", title: "Revendedor" }
	];
	return (
		<Grid container 
		alignItems="center"
		justify="center"
		direction="column"
		spacing={2}
		id="route-menu"  >
			{
				routes.map( ({url, title}, index) => (
					<Grid item key={index} xs={8}>
						<Link href={url} >
							<Button variant="contained">{title}</Button>
						</Link>
					</Grid>
				))
			}
		</Grid>
	);
}
