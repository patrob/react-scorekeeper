import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function PlayerHeader(props) {
    const { player } = props;
    return (
        <>
            {player.name}<Button className="pb-2 pl-1" color="link"><FontAwesomeIcon icon={faTrash} /></Button>
        </>
    );
}
export default PlayerHeader;