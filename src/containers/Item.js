import { Skeleton, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export default function Item() {
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<HomeOutlined key="home" />}
        title="480k SGD over 25 Years"
        description="New HDB at mature estate"
      />
    </Card>
  );
}
