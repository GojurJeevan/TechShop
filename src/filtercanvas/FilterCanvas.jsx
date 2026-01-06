import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { brandsMenu, categoryMenu, sortMenu } from "./FilterBar";

export default function FilterCanvas({ open, setOpen,  setSelectedBrand }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-900/50" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md bg-gray-800 shadow-xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <DialogTitle className="text-lg font-semibold text-white">
                  Filters
                </DialogTitle>
                <button onClick={() => setOpen(false)}>
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
              </div>

              <div className="px-6 py-4 space-y-6 overflow-y-auto">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Sort By
                  </h3>
                  {sortMenu.map((item) => (
                    <p key={item.id} className="text-gray-300 text-sm">
                      {item.title}
                    </p>
                  ))}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Brand
                  </h3>

                  {brandsMenu.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedBrand(item.label);
                        setOpen(false);
                      }}
                      className="block text-left w-full text-gray-300 text-sm py-1 hover:text-white"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Category
                  </h3>
                  {categoryMenu.map((item) => (
                    <button
                      key={item.id}
                      className="flex gap-2 text-gray-300 text-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
