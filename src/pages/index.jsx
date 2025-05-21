import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { openMiniApp } from "zmp-sdk";
import { Box, Page, Text, Button, Icon, Header, Avatar } from "zmp-ui";
import { Bell, Home, MessageCircle, User, Heart, ChevronRight, FileText, Calendar, FileCheck, Newspaper } from "lucide-react";

// Component cho từng mục tính năng
const FeatureItem = ({ icon, title, description, onClick }) => (
  <Box
    className="flex items-center p-4 bg-white rounded-lg shadow-sm mb-3"
    onClick={onClick}
  >
    <Box className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full">
      {icon}
    </Box>
    <Box className="ml-4 flex-1">
      <Text.Title size="small" className="mb-1">{title}</Text.Title>
      <Text size="small" className="text-gray-500">{description}</Text>
    </Box>
    <ChevronRight size={20} className="text-gray-400" />
  </Box>
);

// Component cho blog item
const BlogItem = ({ image, title, date, category }) => (
  <Box className="flex bg-white rounded-lg shadow-sm mb-3 overflow-hidden">
    <Box
      className="w-24 h-24 bg-gray-200 flex-shrink-0 bg-cover bg-center"
      style={{ backgroundImage: `url(/api/placeholder/240/240)` }}
    ></Box>
    <Box className="p-3 flex-1">
      <Text size="small" className="text-blue-500 font-medium">{category}</Text>
      <Text.Title size="small" className="mb-2 line-clamp-2">{title}</Text.Title>
      <Text size="xSmall" className="text-gray-500">{date}</Text>
    </Box>
  </Box>
);

// Component cho trang chủ
function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <Header
        className="px-4 py-2 flex items-center justify-between bg-white"
        title="Ứng Dụng Tiện Ích"
        showBackIcon={false}
      >
        <Box className="flex items-center">
          <Bell size={20} className="text-gray-600 mr-2" />
          <Avatar
            size={36}
            src="/api/placeholder/36/36"
            online
          />
        </Box>
      </Header>

      {/* Main Content */}
      <Box className="flex-1 overflow-auto">
        {activeTab === "home" && (
          <Page className="pb-20">
            {/* Banner */}
            <Box
              className="h-40 rounded-lg mb-4 bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(/api/placeholder/400/160)` }}
            >
              <Box className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 opacity-80"></Box>
              <Box className="absolute bottom-0 left-0 p-4 text-white">
                <Text.Title size="large" className="mb-1">Chào mừng bạn</Text.Title>
                <Text>Khám phá các tiện ích hữu ích của chúng tôi</Text>
              </Box>
            </Box>

            {/* Features */}
            <Box className="mb-6">
              <Box className="flex justify-between items-center mb-3">
                <Text.Title>Tính năng</Text.Title>
                <Button size="small" variant="tertiary">Xem tất cả</Button>
              </Box>

              <Box className="grid grid-cols-4 gap-3 mb-4">
                <Box className="flex flex-col items-center">
                  <Box className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <User size={20} className="text-blue-500" />
                  </Box>
                  <Text size="xSmall" className="text-center">Thông tin cá nhân</Text>
                </Box>

                <Box className="flex flex-col items-center">
                  <Box className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <MessageCircle size={20} className="text-green-500" />
                  </Box>
                  <Text size="xSmall" className="text-center">Gửi phản ánh</Text>
                </Box>

                <Box className="flex flex-col items-center">
                  <Box className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                    <Newspaper size={20} className="text-purple-500" />
                  </Box>
                  <Text size="xSmall" className="text-center">Xem blog</Text>
                </Box>

                <Box className="flex flex-col items-center">
                  <Box className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                    <FileCheck size={20} className="text-orange-500" />
                  </Box>
                  <Text size="xSmall" className="text-center">Đăng ký</Text>
                </Box>
              </Box>

              <FeatureItem
                icon={<User size={20} className="text-blue-500" />}
                title="Thông tin cá nhân"
                description="Cập nhật và quản lý thông tin cá nhân"
                onClick={() => { }}
              />

              <FeatureItem
                icon={<MessageCircle size={20} className="text-green-500" />}
                title="Gửi phản ánh"
                description="Gửi ý kiến phản ánh của bạn"
                onClick={() => navigate("/feedback")}
              />

              <FeatureItem
                icon={<Newspaper size={20} className="text-purple-500" />}
                title="Xem các blog"
                description="Đọc các bài viết mới nhất"
                onClick={() => { }}
              />

              <FeatureItem
                icon={<FileCheck size={20} className="text-orange-500" />}
                title="Đăng ký tiện ích"
                description="Đăng ký các dịch vụ tiện ích"
                onClick={() => { }}
              />
            </Box>

            {/* Blogs */}
            <Box className="mb-6">
              <Box className="flex justify-between items-center mb-3">
                <Text.Title>Bài viết mới nhất</Text.Title>
                <Button size="small" variant="tertiary">Xem tất cả</Button>
              </Box>

              <BlogItem
                title="Hướng dẫn sử dụng các tiện ích mới"
                date="20/05/2025"
                category="Hướng dẫn"
              />

              <BlogItem
                title="5 thủ thuật giúp bạn tối ưu hóa trải nghiệm"
                date="18/05/2025"
                category="Mẹo hay"
              />

              <BlogItem
                title="Cập nhật mới: Các tính năng được thêm vào tháng 5"
                date="15/05/2025"
                category="Tin tức"
              />
            </Box>

            {/* Events */}
            <Box>
              <Box className="flex justify-between items-center mb-3">
                <Text.Title>Sự kiện sắp diễn ra</Text.Title>
                <Button size="small" variant="tertiary">Xem tất cả</Button>
              </Box>

              <Box className="bg-white rounded-lg shadow-sm p-4 mb-3">
                <Box className="flex mb-3">
                  <Box className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <Calendar size={20} className="text-red-500" />
                  </Box>
                  <Box>
                    <Text.Title size="small">Hội thảo trực tuyến</Text.Title>
                    <Text size="small" className="text-gray-500">25/05/2025 • 19:00</Text>
                  </Box>
                </Box>
                <Text size="small" className="mb-3">Tham gia hội thảo để tìm hiểu về các cập nhật mới nhất và cách sử dụng hiệu quả các tiện ích.</Text>
                <Button size="small" className="w-full">Đăng ký tham gia</Button>
              </Box>
            </Box>
          </Page>
        )}

        {activeTab === "services" && (
          <Page className="pb-20">
            <Box className="mb-4">
              <Text.Title className="mb-3">Dịch vụ</Text.Title>

              <Box className="mb-4">
                <Text.Title size="small" className="mb-2">Dịch vụ nổi bật</Text.Title>
                <Box className="grid grid-cols-2 gap-3">
                  <Box className="bg-white rounded-lg shadow-sm p-4">
                    <Box className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                      <FileText size={18} className="text-blue-500" />
                    </Box>
                    <Text.Title size="xSmall">Đăng ký dịch vụ A</Text.Title>
                    <Text size="xSmall" className="text-gray-500">Mô tả ngắn về dịch vụ</Text>
                  </Box>

                  <Box className="bg-white rounded-lg shadow-sm p-4">
                    <Box className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                      <FileText size={18} className="text-green-500" />
                    </Box>
                    <Text.Title size="xSmall">Đăng ký dịch vụ B</Text.Title>
                    <Text size="xSmall" className="text-gray-500">Mô tả ngắn về dịch vụ</Text>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Text.Title size="small" className="mb-2">Tất cả dịch vụ</Text.Title>
                <FeatureItem
                  icon={<FileText size={20} className="text-blue-500" />}
                  title="Dịch vụ A"
                  description="Mô tả chi tiết về dịch vụ A"
                  onClick={() => { }}
                />

                <FeatureItem
                  icon={<FileText size={20} className="text-green-500" />}
                  title="Dịch vụ B"
                  description="Mô tả chi tiết về dịch vụ B"
                  onClick={() => { }}
                />

                <FeatureItem
                  icon={<FileText size={20} className="text-purple-500" />}
                  title="Dịch vụ C"
                  description="Mô tả chi tiết về dịch vụ C"
                  onClick={() => { }}
                />
              </Box>
            </Box>
          </Page>
        )}

        {activeTab === "notifications" && (
          <Page className="pb-20">
            <Box className="mb-4">
              <Text.Title className="mb-3">Thông báo</Text.Title>

              <Box className="bg-white rounded-lg shadow-sm p-4 mb-3">
                <Box className="flex items-center mb-2">
                  <Box className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Bell size={16} className="text-blue-500" />
                  </Box>
                  <Box className="flex-1">
                    <Text size="small" className="font-medium">Thông báo mới</Text>
                    <Text size="xSmall" className="text-gray-500">2 giờ trước</Text>
                  </Box>
                </Box>
                <Text size="small">Bạn có thông báo mới về dịch vụ đã đăng ký.</Text>
              </Box>

              <Box className="bg-white rounded-lg shadow-sm p-4 mb-3">
                <Box className="flex items-center mb-2">
                  <Box className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <FileCheck size={16} className="text-green-500" />
                  </Box>
                  <Box className="flex-1">
                    <Text size="small" className="font-medium">Đăng ký thành công</Text>
                    <Text size="xSmall" className="text-gray-500">1 ngày trước</Text>
                  </Box>
                </Box>
                <Text size="small">Bạn đã đăng ký thành công dịch vụ A.</Text>
              </Box>

              <Box className="bg-white rounded-lg shadow-sm p-4 mb-3">
                <Box className="flex items-center mb-2">
                  <Box className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Newspaper size={16} className="text-purple-500" />
                  </Box>
                  <Box className="flex-1">
                    <Text size="small" className="font-medium">Bài viết mới</Text>
                    <Text size="xSmall" className="text-gray-500">3 ngày trước</Text>
                  </Box>
                </Box>
                <Text size="small">Có bài viết mới đã được đăng trong mục Hướng dẫn.</Text>
              </Box>
            </Box>
          </Page>
        )}

        {activeTab === "profile" && (
          <Page className="pb-20">
            <Box className="bg-white rounded-lg shadow-sm p-4 mb-4">
              <Box className="flex items-center mb-4">
                <Avatar
                  size={60}
                  src="/api/placeholder/60/60"
                  className="mr-4"
                />
                <Box>
                  <Text.Title size="normal">Nguyễn Văn A</Text.Title>
                  <Text size="small" className="text-gray-500">nguyenvana@example.com</Text>
                </Box>
              </Box>
              <Button className="w-full">Chỉnh sửa thông tin</Button>
            </Box>

            <Box className="bg-white rounded-lg shadow-sm mb-4">
              <Box className="p-4 border-b border-gray-100">
                <Text.Title size="small">Thông tin cá nhân</Text.Title>
              </Box>

              <Box className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Text>Số điện thoại</Text>
                <Text className="text-gray-500">0123456789</Text>
              </Box>

              <Box className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Text>Địa chỉ</Text>
                <Text className="text-gray-500">Hà Nội, Việt Nam</Text>
              </Box>

              <Box className="p-4 flex justify-between items-center">
                <Text>Ngày sinh</Text>
                <Text className="text-gray-500">01/01/1990</Text>
              </Box>
            </Box>

            <Box className="bg-white rounded-lg shadow-sm mb-4">
              <Box className="p-4 border-b border-gray-100">
                <Text.Title size="small">Cài đặt</Text.Title>
              </Box>

              <Box className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Text>Nhận thông báo</Text>
                <Box className="w-12 h-6 bg-blue-500 rounded-full relative">
                  <Box className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></Box>
                </Box>
              </Box>

              <Box className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Text>Chủ đề tối</Text>
                <Box className="w-12 h-6 bg-gray-300 rounded-full relative">
                  <Box className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></Box>
                </Box>
              </Box>

              <Box className="p-4 flex justify-between items-center">
                <Text>Ngôn ngữ</Text>
                <Text className="text-gray-500">Tiếng Việt</Text>
              </Box>
            </Box>

            <Button variant="danger" className="w-full">Đăng xuất</Button>
          </Page>
        )}
      </Box>

      {/* Bottom Navigation */}
      <Box className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2">
        <Box
          className={`flex flex-col items-center p-2 ${activeTab === "home" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabChange("home")}
        >
          <Home size={24} />
          <Text size="xSmall">Trang chủ</Text>
        </Box>

        <Box
          className={`flex flex-col items-center p-2 ${activeTab === "services" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabChange("services")}
        >
          <FileText size={24} />
          <Text size="xSmall">Dịch vụ</Text>
        </Box>

        <Box
          className={`flex flex-col items-center p-2 ${activeTab === "notifications" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabChange("notifications")}
        >
          <Bell size={24} />
          <Text size="xSmall">Thông báo</Text>
        </Box>

        <Box
          className={`flex flex-col items-center p-2 ${activeTab === "profile" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabChange("profile")}
        >
          <User size={24} />
          <Text size="xSmall">Cá nhân</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;