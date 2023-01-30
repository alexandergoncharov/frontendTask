import { Button, Modal, Typography } from 'antd';

const { Text, Paragraph } = Typography;

type LoadingModalProps = {
    statuses: { isAuthorLoaded: boolean, isQuoteLoaded: boolean };
    cancel: () => void;
};

const LoadingModal = ({ statuses, cancel }: LoadingModalProps) => {
    return (
        <Modal
            title={`Requesting the ${!statuses.isAuthorLoaded ? "author" : "quote"}`}
            open={true}
            closable={false}
            footer={
                <Button key="submit" type="primary" onClick={cancel}>
                    Cancel
                </Button>
            }
        >
            <Paragraph><Text>Step 0: Requesting author.. {statuses.isAuthorLoaded && "Completed"}</Text></Paragraph>
            <Paragraph><Text>Step 1: Requesting quote.. {statuses.isQuoteLoaded && "Completed"}</Text></Paragraph>
        </Modal>
    );
}

export default LoadingModal;
