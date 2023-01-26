import { Button, Form, Input } from "antd";

const Login = () => {
    return <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={() => console.log("login")}
    >
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input placeholder="Username" />
        </Form.Item>
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
                Log in
            </Button>
        </Form.Item>
    </Form>;
};

export default Login;