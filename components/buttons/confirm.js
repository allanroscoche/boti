import { Button } from "@material-ui/core";
import Link from "next/link";

export default function ConfirmButton(props) {
    return (
        <Link href={props.url} passHref>
            <Button variant="contained" color="primary" as="a">
                {props.children}
            </Button>
        </Link>
    );
}