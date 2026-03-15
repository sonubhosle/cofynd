import { SectionHeader } from "./SectionHeader"
import Image from "next/image"
const componies = [
    { "poster": "https://img.cofynd.com/images/latest_images_2024/d4d6213847e3f0ce93f7ab1baa36d2ad3372c623.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/5d26d7d9d23f90f97c7dfd3d144fd1f4f16cc6dc.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/e3d2cad2030bb11c2afe3f0a2bccd98678971fdf.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/67720a1323eb8a3ba31b94fb422ca5c73c7373a9.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/e42a29e6a367611cc8885368141f345017b4fbf7.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/937bc8b42de27ccffc63498e9025c107e90aeb70.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/e037cfebd61c9704c2b598a6858fa36f35c3989b.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/846c09df44eda0f0342972e34e1217047f383aa9.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/6b740d1de90277f8f3eaba5cef2d2f0891a081cd.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/df8c51ee0fed9fd9954aeb0589ef63f48d549ead.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/6020b6aab2e49e659e3c6304f3a0b06c0b7e613e.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/ce9a4f06a2e8edc92b476f898d76378851964a10.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/b4fc0aac4ee96711cbdfcb5f1f364339b554fdd1.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/79812cfe233977636a6e7387205e97c27c752171.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/aebb5fe06fc397a586f89e1758714931856d766a.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/96aa2fa2b4e0c0c3a474ac1b08f3dfd52910d2f1.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/c7132100da565b7bcaaa74a11e3fb9d509b111f1.webp" },
    { "poster": "https://img.cofynd.com/images/latest_images_2024/888df4892887ca8f4faa9fa400c13c236854a31c.webp" },



]
export const TrustComponies = () => {
    return (
        <div className="py-8 px-6 w-full">
            <SectionHeader highlight={'Trusted'} rest={'By Top Companies'} />
            <div className="flex flex-wrap items-center  gap-5 mt-8">
                {
                    componies.map((cmp, indx) => (
                        <Image key={indx} src={cmp.poster} alt="Company Logo" width={120} height={60} className="object-contain" />
                    ))
                }
            </div>
        </div>
    )
}