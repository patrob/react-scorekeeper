import { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'reactstrap';
import ScoreboardRow from './ScoreboardRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import PlayerModal from './PlayerModal';
import PlayerHeader from './PlayerHeader';
import '../../styles/components/_scoreboard.scss';

function Scoreboard() {

    const [players, setPlayers] = useState([
        {
            id: 1,
            name: "Patrick",
            scores: [{
                    round: 1,
                    score: 52
                }
            ]
        }
    ]);

    const [rounds, setRounds] = useState([
        {
            round: 1
        }
    ]);

    const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);

    const addPlayer = (player) => {
        setPlayers([...players, player]);
    };

    const showModal = () => {
        setIsPlayerModalOpen(true);
    };

    const toggleModal = () => {
        setIsPlayerModalOpen(!isPlayerModalOpen);
    };

    return (
        <div className="Scoreboard">
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Button onClick={showModal}>Add Player <FontAwesomeIcon icon={faCoffee} /></Button>
                </Row>
                <Row className="justify-content-center">
                    <Col className="top-left-corner">
                        Round #
                    </Col>
                    {players.map((player, index, arr) => {
                        const conditionalRadius = index === arr.length - 1 ? " top-right-corner" : "";
                        const className = `align-middle${conditionalRadius}`;
                        return (
                            <Col className={className}>
                                <PlayerHeader player={player} />
                            </Col>
                        );
                    })}
                </Row>
                {rounds.map((round) => (<ScoreboardRow round={round.round} players={players} />))}
                <Row className="justify-content-center">
                    <Col className="bottom-left-corner">
                        Test
                    </Col>
                    <Col className="bottom-right-corner">
                        test
                    </Col>
                </Row>
            </Container>
            <PlayerModal isOpen={isPlayerModalOpen} toggle={toggleModal} addPlayer={addPlayer} />
        </div>
    );
};

export default Scoreboard;