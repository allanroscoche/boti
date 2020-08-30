import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "next/link";

export default function Home()
{
	const routes = [
		{ url:"/login", title: "Login" },
		{ url:"/compras", title: "Compras" },
		{ url:"/revendedor", title: "Revendedor" }
	];
	return (
		<Menu id="route-menu" open={true} >
			{
				routes.map( ({url, title}) => (
					<MenuItem key={url}><Link href={url}>{title}</Link></MenuItem>
				))
			}
		</Menu>
	);
}
