import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          Hong's Blog
        </h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          [Front-end 필수 수강] 한 번에 끝내는 프론트엔드 개발 (2023)
          과제 1차 제출입니다.
        </p>
      </Col>
    </Row>
  );
}
