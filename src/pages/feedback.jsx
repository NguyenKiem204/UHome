import React, { useState } from "react";
import { Box, Page, Header, Text, Input, Button, Select, useSnackbar } from "zmp-ui";
import { ChevronLeft, Camera, Upload, X } from "lucide-react";

function FeedbackPage({ onBack }) {
    const { openSnackbar } = useSnackbar();

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        images: []
    });

    const categories = [
        { value: "service", label: "Dịch vụ" },
        { value: "technical", label: "Kỹ thuật" },
        { value: "app", label: "Ứng dụng" },
        { value: "other", label: "Khác" }
    ];

    const [uploadPreview, setUploadPreview] = useState([]);

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleImageUpload = () => {
        // Giả lập việc tải lên ảnh
        const newImage = `/api/placeholder/${320 + Math.floor(Math.random() * 80)}/${320 + Math.floor(Math.random() * 80)}`;
        setUploadPreview([...uploadPreview, newImage]);
        setFormData({
            ...formData,
            images: [...formData.images, newImage]
        });
    };

    const removeImage = (index) => {
        const newPreview = [...uploadPreview];
        newPreview.splice(index, 1);
        setUploadPreview(newPreview);

        const newImages = [...formData.images];
        newImages.splice(index, 1);
        setFormData({
            ...formData,
            images: newImages
        });
    };

    const handleSubmit = () => {
        // Kiểm tra dữ liệu
        if (!formData.title.trim()) {
            openSnackbar({
                text: "Vui lòng nhập tiêu đề phản ánh",
                type: "warning",
            });
            return;
        }

        if (!formData.category) {
            openSnackbar({
                text: "Vui lòng chọn danh mục",
                type: "warning",
            });
            return;
        }

        if (!formData.description.trim()) {
            openSnackbar({
                text: "Vui lòng nhập nội dung phản ánh",
                type: "warning",
            });
            return;
        }

        // Giả lập gửi dữ liệu
        console.log("Gửi phản ánh:", formData);

        // Hiển thị thông báo thành công
        openSnackbar({
            text: "Gửi phản ánh thành công!",
            type: "success",
        });

        // Reset form
        setFormData({
            title: "",
            category: "",
            description: "",
            images: []
        });
        setUploadPreview([]);

        // Quay lại trang trước sau 1.5 giây
        setTimeout(() => {
            if (onBack) onBack();
        }, 1500);
    };

    return (
        <Page>
            <Header
                title="Gửi phản ánh"
                leftIcon={<ChevronLeft size={24} />}
                onLeftClick={onBack}
            />

            <Box className="p-4">
                <Box className="mb-4">
                    <Text size="small" className="mb-1 font-medium">Tiêu đề phản ánh</Text>
                    <Input
                        value={formData.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                        placeholder="Nhập tiêu đề phản ánh"
                    />
                </Box>

                <Box className="mb-4">
                    <Text size="small" className="mb-1 font-medium">Danh mục</Text>
                    <Select
                        placeholder="Chọn danh mục"
                        value={formData.category}
                        onChange={(value) => handleChange("category", value)}
                        options={categories}
                    />
                </Box>

                <Box className="mb-4">
                    <Text size="small" className="mb-1 font-medium">Nội dung phản ánh</Text>
                    <Input.TextArea
                        rows={5}
                        placeholder="Mô tả chi tiết vấn đề của bạn"
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                    />
                </Box>

                <Box className="mb-4">
                    <Text size="small" className="mb-1 font-medium">Hình ảnh (tùy chọn)</Text>
                    <Text size="xSmall" className="text-gray-500 mb-2">
                        Bạn có thể tải lên hình ảnh minh họa cho phản ánh (tối đa 5 hình)
                    </Text>

                    <Box className="flex flex-wrap gap-2 mb-2">
                        {uploadPreview.map((image, index) => (
                            <Box key={index} className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                                <Box
                                    className="absolute top-1 right-1 z-10 bg-black bg-opacity-60 rounded-full p-1"
                                    onClick={() => removeImage(index)}
                                >
                                    <X size={14} className="text-white" />
                                </Box>
                                <img
                                    src={image}
                                    className="w-full h-full object-cover"
                                    alt={`Upload ${index + 1}`}
                                />
                            </Box>
                        ))}

                        {uploadPreview.length < 5 && (
                            <Box
                                className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer"
                                onClick={handleImageUpload}
                            >
                                <Upload size={20} className="text-gray-500 mb-1" />
                                <Text size="xSmall" className="text-gray-500">Tải ảnh</Text>
                            </Box>
                        )}
                    </Box>
                </Box>

                <Button
                    className="w-full mt-4"
                    onClick={handleSubmit}
                >
                    Gửi phản ánh
                </Button>
            </Box>
        </Page>
    );
}

export default FeedbackPage;