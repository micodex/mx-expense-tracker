export default function SettingsPage() {
  return (
    <div className="relative bg-white p-6 rounded-md border-2 border-dashed border-gray-300 min-h-[600px]">
      صفحه تنظیمات
      <div
        className="absolute inset-0 h-full w-full 
          bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
          bg-[size:20px_20px] 
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"
      />
    </div>
  );
}
