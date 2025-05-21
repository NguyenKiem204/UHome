import React, { useState } from "react";
import { Box, Page, Header, Text, Input, Button, Avatar } from "zmp-ui";
import { ChevronLeft, Camera, Edit2 } from "lucide-react";

function ProfilePage({ onBack }) {
  const [profile, setProfile] = useState({
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    address: "Hà Nội, Việt Nam",
    birthdate: "01/01/1990",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({...profile});

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSave = () => {
    setProfile({...formData});
    setIsEditing(false);
  };

  return (
    <Page>
      <Header
        title="Thông tin cá nhân"
        leftIcon={<ChevronLeft size={24} />}
        onLeftClick={onBack}
      />

      <Box className="p-4">
        <Box className="flex flex-col items-center justify-center mb-6 relative">
          <Avatar
            size={100}
            src="/api/placeholder/100/100"
            className="mb-3"
          />
          {isEditing && (
            <Box className="absolute bottom-0 right-1/3 bg-blue-500 p-2 rounded-full">
              <Camera size={16} className="text-white" />
            </Box>
          )}
          {!isEditing ? (
            <>
              <Text.Title size="normal">{profile.name}</Text.Title>
              <Text size="small" className="text-gray-500">{profile.email}</Text>
            </>
          ) : (
            <Text size="small" className="text-blue-500 mt-2">Chạm vào biểu tượng để thay đổi ảnh</Text>
          )}
        </Box>

        {!isEditing ? (
          <>
            <Box className="bg-white rounded-lg shadow-sm mb-4">
              <Box className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Text>Họ và tên</Text>
                <Text className="text-gray-700">{profile.name}</Text>
              </Box>
              
              <Box className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Text>Email</Text>
                <Text className="text-gray-700">{profile.email}</Text>
              </Box>
              
              <Box className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Text>Số điện thoại</Text>
                <Text className="text-gray-700">{profile.phone}</Text>
              </Box>
              
              <Box className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Text>Địa chỉ</Text>
                <Text className="text-gray-700">{profile.address}</Text>
              </Box>
              
              <Box className="p-4 flex justify-between items-center">
                <Text>Ngày sinh</Text>
                <Text className="text-gray-700">{profile.birthdate}</Text>
              </Box>
            </Box>
            
            <Button 
              className="w-full" 
              suffixIcon={<Edit2 size={18} />}
              onClick={() => setIsEditing(true)}
            >
              Chỉnh sửa thông tin
            </Button>
          </>
        ) : (
          <>
            <Box className="bg-white rounded-lg shadow-sm mb-4 p-4">
              <Box className="mb-4">
                <Text size="small" className="mb-1 font-medium">Họ và tên</Text>
                <Input 
                  value={formData.name} 
                  onChange={(e) => handleChange("name", e.target.value)} 
                  placeholder="Nhập họ và tên"
                />
              </Box>
              
              <Box className="mb-4">
                <Text size="small" className="mb-1 font-medium">Email</Text>
                <Input 
                  type="email"
                  value={formData.email} 
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Nhập email"
                />
              </Box>
              
              <Box className="mb-4">
                <Text size="small" className="mb-1 font-medium">Số điện thoại</Text>
                <Input 
                  type="tel"
                  value={formData.phone} 
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Nhập số điện thoại"
                />
              </Box>
              
              <Box className="mb-4">
                <Text size="small" className="mb-1 font-medium">Địa chỉ</Text>
                <Input 
                  value={formData.address} 
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Nhập địa chỉ"
                />
              </Box>
              
              <Box>
                <Text size="small" className="mb-1 font-medium">Ngày sinh</Text>
                <Input 
                  type="date"
                  value={formData.birthdate} 
                  onChange={(e) => handleChange("birthdate", e.target.value)}
                  placeholder="Nhập ngày sinh"
                />
              </Box>
            </Box>
            
            <Box className="flex space-x-3">
              <Button 
                className="flex-1" 
                variant="secondary"
                onClick={() => {
                  setFormData({...profile});
                  setIsEditing(false);
                }}
              >
                Hủy
              </Button>
              <Button 
                className="flex-1" 
                onClick={handleSave}
              >
                Lưu thay đổi
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Page>
  );
}

export default ProfilePage;