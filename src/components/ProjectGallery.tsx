import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, Film, Plus, X } from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  caption?: string;
};

const placeholderMedia: MediaItem[] = [
  { type: "image", src: "/placeholder.svg", caption: "Project photo — replace with your image" },
  { type: "image", src: "/placeholder.svg", caption: "Project photo — replace with your image" },
  { type: "image", src: "/placeholder.svg", caption: "Project photo — replace with your image" },
  { type: "video", src: "", caption: "Project video — replace with your video" },
];

const ProjectGallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-primary text-sm mb-2 tracking-wider"
        >
          05. Gallery
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Project Media
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground mb-12 max-w-xl"
        >
          Photos and videos from my projects and installations. Replace the placeholders below with your own media.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholderMedia.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-video bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary/40 hover:glow-border transition-all duration-300"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.caption || "Project image"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <Film size={48} className="text-muted-foreground" />
                </div>
              )}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 text-primary text-sm font-mono">
                  {item.type === "image" ? <ImageIcon size={16} /> : <Film size={16} />}
                  View {item.type}
                </div>
              </div>
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="text-xs text-muted-foreground truncate">{item.caption}</p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Add more placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="aspect-video bg-card/50 border border-dashed border-border rounded-lg flex flex-col items-center justify-center text-muted-foreground hover:border-primary/40 transition-colors cursor-pointer"
          >
            <Plus size={32} className="mb-2" />
            <p className="text-sm font-mono">Add more media</p>
            <p className="text-xs mt-1">Replace placeholders in code</p>
          </motion.div>
        </div>

        {/* Lightbox */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSelectedMedia(null)}
            >
              <X size={28} />
            </button>
            <div className="max-w-4xl w-full max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.caption || "Project image"}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <div className="aspect-video bg-card rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground font-mono text-sm">
                    Replace this with your video file or embed URL
                  </p>
                </div>
              )}
              {selectedMedia.caption && (
                <p className="text-sm text-muted-foreground mt-4 text-center">{selectedMedia.caption}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
