import { Card, CardContent } from "@mui/material";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Left Side - Map */}
      <div className="md:col-span-2">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          className="w-full h-[500px] rounded shadow"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Axis%202%20-%20Dubai%20Silicon%20Oasis%20-%20Dubai%20-%20United%20Arab%20Emirates+(Bridg)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/collections/drones/">drones ireland</a>
        </iframe>
      </div>

      {/* Right Side - Contact Info */}
      <Card className="w-full shadow-lg">
        <CardContent className="space-y-4">
          <h2 className="text-title font-bold">BRIDG</h2>
          <p className="text-body">
            <span className="font-bold">Email:</span> contact@bridg.ae
          </p>
          <p className="text-body">
            <span className="font-bold">Mobile:</span> +971-55-123-4567
          </p>
          <p className="text-body">
            <span className="font-bold">Address:</span> Axis 2, Dubai Silicon
            Oasis, Dubai, UAE
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
