import { Typography } from "@material-ui/core";

export default function DataDisplay({data}) {
    return (<Typography>Data: {data.toLocaleDateString()}</Typography>);
}