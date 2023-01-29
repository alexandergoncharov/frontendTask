import { Button, Form, Input, Typography } from "antd";

const { Text } = Typography;

const Login = () => {
    return <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={() => console.log("login")}
    >
        <Text>Email address</Text>
        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input placeholder="Enter email" />
            <Text type="secondary">We'll never share your email with anyone else.</Text>
        </Form.Item>

        <Text>Password</Text>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input
                type="password"
                placeholder="Password"
            />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
            </Button>
        </Form.Item>
    </Form>;
};

export default Login;