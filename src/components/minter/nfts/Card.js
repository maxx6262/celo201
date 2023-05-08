import React from "react";
import PropTypes from "prop-types";
import {Card, Col, Badge, Row, Stack} from "react-bootstrap";
import { truncateAddress } from "../../../utils";
import Identicon from "../../ui/Identicon";
import CardHeader from "react-bootstrap/CardHeader";

const NftCard = ({ nft}) => {
    const { image, description, owner, name, index, attributes} = nft;

    return (
        <Col key={index}>
            <Card className=" h-100">
                <CardHeader>
                    <Stack direction="horizontal" gap={2}>
                        <Identicon address={owner} size={28} />
                        <span className="font-monospace text-secondary">
                            {truncateAddress(owner)}
                        </span>
                        <Badge bg="secondary" className="ms-auto">
                            {index} ID
                        </Badge>
                    </Stack>
                </CardHeader>

                <div className=" ratio ratio-4x3">
                    <img src={image} alt={description} style={{ objectFit: "cover"}} />
                </div>

                <Card.Body className="d-flex flex-column text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="flex-grow-1">{description}</Card.Text>
                    <div>
                        <Row className="mt-2">
                            {attributes.map((attribute, key) => {
                                <Col key={key}>
                                    <div className="border rounded bg-light">
                                        <div className="text-secondary fw-lighter small text-capitalize">
                                            {attribute.trait_type}
                                        </div>
                                        <div className="text-secondary text-capitalize font-monospace">
                                            {attribute.value}
                                        </div>
                                    </div>
                                </Col>
                            })}
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

NftCard.propTypes = {
    // props passed into this component
    nft: PropTypes.instanceOf(Object).isRequired,
};

export default NftCard;