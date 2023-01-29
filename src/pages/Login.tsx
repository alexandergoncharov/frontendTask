import { Button, Form, Input, Typography } from "antd";
import { loginUser } from "../service/User";
import { LoginParams } from "../utils/types";

const { Text } = Typography;

const Login = () => {
    const onFinish = async (values: LoginParams) => {
        console.log(values);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Text>Email address</Text>
            <Form.Item
                name="email"
                extra="We'll never share your email with anyone else."
                rules={[
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your Email!",
                    },
                ]}
            >
                <Input placeholder="Enter email" />
            </Form.Item>

            <Text>Password</Text>
            <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
            >
                <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;
