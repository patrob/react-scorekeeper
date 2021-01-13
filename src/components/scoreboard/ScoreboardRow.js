import { Col, Row } from "reactstrap";

function ScoreboardRow(props) {

    const { players, round } = props;

    const scoresForRound = players.map((player) => player.scores.find((score) => score.round === round));

    return (
        <Row>
            <Col>{round}</Col>
            {scoresForRound.map((score) => (<Col>{score.score}</Col>))}
        </Row>
    );
}

export default ScoreboardRow;