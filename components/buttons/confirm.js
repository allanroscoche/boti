import Button from "@material-ui/core/Button";

export default function ConfirmButton(props) {
    return (
        <Button variant="contained" color="primary">
            {props.children}
        </Button>
    );
}