'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  MessageCircle, 
  Star, 
  QrCode, 
  X, 
  Bot,
  Send,
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function FloatingButtons() {
  const [showChat, setShowChat] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Chat Button */}
        <Button
          size="lg"
          className="floating-button w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => setShowChat(true)}
        >
          <Bot className="h-6 w-6" />
        </Button>

        {/* Feedback Button */}
        <Button
          size="lg"
          className="floating-button w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white"
          onClick={() => setShowFeedback(true)}
        >
          <Star className="h-6 w-6" />
        </Button>

        {/* QR Code Button */}
        <Button
          size="lg"
          className="floating-button w-14 h-14 bg-purple-500 hover:bg-purple-600 text-white"
          onClick={() => setShowQR(true)}
        >
          <QrCode className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Dialog */}
      <Dialog open={showChat} onOpenChange={setShowChat}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-blue-500" />
              TeksMart AI Assistant
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-3 text-sm">
              <p className="text-gray-600 mb-2">Hi! I'm here to help you with:</p>
              <ul className="text-gray-700 space-y-1 text-xs">
                <li>• Finding the right products</li>
                <li>• Understanding MOQ requirements</li>
                <li>• Financing options</li>
                <li>• Supplier information</li>
              </ul>
            </div>
            
            <div className="flex gap-2">
              <Input placeholder="Ask me anything..." className="flex-1" />
              <Button size="sm" className="gradient-primary">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                Show me laptops under KES 30k
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                What's the MOQ for chargers?
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                How does financing work?
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Feedback Dialog */}
      <Dialog open={showFeedback} onOpenChange={setShowFeedback}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-emerald-500" />
              Share Your Feedback
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                How would you rate your experience?
              </label>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant="ghost"
                    size="sm"
                    className="p-1 hover:bg-yellow-50"
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 block mb-2">
                Tell us more (optional)
              </label>
              <Textarea 
                placeholder="What did you like? What could we improve?"
                className="resize-none"
                rows={3}
              />
            </div>

            <Button className="w-full gradient-primary">
              Submit Feedback
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* QR Code Dialog */}
      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <QrCode className="h-5 w-5 text-purple-500" />
              Download TeksMart App
            </DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4">
            <div className="bg-white p-6 rounded-lg border-2 border-gray-200 inline-block">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                <QrCode className="h-16 w-16 text-gray-400" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Scan to Download
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get the TeksMart mobile app for easier browsing and faster ordering on the go.
              </p>
            </div>

            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download for Android
              </Button>
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download for iOS
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}