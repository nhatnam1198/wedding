import { HeartFilled, SketchOutlined } from '@ant-design/icons';
import { InvitationCardProps } from './InvitationCard';

export const INVITATION_INFO: InvitationCardProps[] = [
  {
    title: 'Lễ cưới',
    datetime: '9h00 thứ 7, ngày 21.10.2023\n(Nhằm ngày 07.09 năm Quý Mão)',
    locationName: 'Thánh Đường Giáo Xứ Đông Quang',
    locationDetail: '35 Đông Hưng Thuận 2, Đông Hưng Thuận, Quận 12',
    icon: <SketchOutlined />,
  },
  {
    title: 'Tiệc cưới',
    icon: <HeartFilled />,
    datetime: '17h30 chủ nhật, ngày 22.10.2023\n(Nhằm ngày 08.09 năm Quý Mão)',
    locationName: 'The Adora Center - Sảnh Crystal',
    locationDetail: '431 Hoàng Văn Thụ, phường 4, Quận Tân Bình',
  },
];
