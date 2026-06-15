export default function handler(req, res) {
  res.status(200);
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Content-Disposition", "inline");

  res.end(`5.39.46.39 growtopia1.com
5.39.46.39 growtopia2.com
5.39.46.39 www.growtopia1.com
5.39.46.39 www.growtopia2.com`);
}
