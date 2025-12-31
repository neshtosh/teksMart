'use client';

import { useState, useEffect } from 'react';
import { Bell, Check, Clock, AlertCircle, X, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type Notification = {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  time: string;
  read: boolean;
};

export default function NotificationsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setNotifications([
    {
      id: '1',
      type: 'success',
      title: 'Order Shipped',
      message: 'Your order #12345 has been shipped and will arrive in 2-3 business days.',
      time: '10 min ago',
      read: false,
    },
    {
      id: '2',
      type: 'info',
      title: 'New Message',
      message: 'You have a new message from Supplier XYZ regarding your quote request.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: '3',
      type: 'warning',
      title: 'Low Stock Alert',
      message: 'Your inventory for iPhone 13 Pro is running low. Only 5 items remaining.',
      time: '1 day ago',
      read: true,
    },
    {
      id: '4',
      type: 'success',
      title: 'Payment Received',
      message: 'Payment of KES 45,000 for order #12345 has been received.',
      time: '2 days ago',
      read: true,
    },
    {
      id: '5',
      type: 'error',
      title: 'Order Delayed',
      message: 'Your order #12346 has been delayed due to high demand. New delivery date: Feb 15.',
      time: '3 days ago',
      read: true,
    },
      ]);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return <Bell className="h-5 w-5 text-blue-500" />;
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="container-custom">
        {/* Header */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 p-6 mb-8 text-white">
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Notifications</h1>
                <p className="text-blue-100">
                  {unreadCount > 0 
                    ? `${unreadCount} unread notification${unreadCount === 1 ? '' : 's'}`
                    : 'All caught up! You have no unread notifications'}
                </p>
              </div>
              <Link href="/">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500 opacity-20"></div>
          <div className="absolute -right-10 top-1/2 h-32 w-32 rounded-full bg-purple-500 opacity-20"></div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={markAllAsRead}
              disabled={unreadCount === 0 || isLoading}
              className="border-gray-200 hover:bg-white/80"
            >
              <Check className="h-4 w-4 mr-1.5" />
              Mark all as read
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setNotifications([])}
              disabled={notifications.length === 0 || isLoading}
              className="border-gray-200 hover:bg-white/80"
            >
              <X className="h-4 w-4 mr-1.5" />
              Clear all
            </Button>
          </div>
          <div className="text-sm text-gray-500">
            {notifications.length} total notification{notifications.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Notifications List */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
        ) : notifications.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-4 bg-white rounded-xl shadow-sm border border-gray-100"
          >
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
              <Bell className="h-12 w-12 text-blue-500" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No notifications yet</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              When you get notifications, they'll appear here. We'll let you know when something new comes in!
            </p>
            <Button className="group gradient-primary hover:opacity-90 transition-all">
              Refresh
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div 
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
                  className={cn(
                    'bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all',
                    !notification.read && 'ring-2 ring-blue-500/20',
                    'hover:shadow-md hover:-translate-y-0.5'
                  )}
                >
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className={cn(
                        'flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center',
                        !notification.read ? 'bg-blue-100' : 'bg-gray-50',
                        'mt-0.5'
                      )}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="ml-4 flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className={cn(
                            'text-base font-medium',
                            !notification.read ? 'text-gray-900' : 'text-gray-600'
                          )}>
                            {notification.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-400">{notification.time}</span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteNotification(notification.id);
                              }}
                              className="text-gray-300 hover:text-red-500 transition-colors p-1 -mr-1"
                              aria-label="Delete notification"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        {!notification.read && (
                          <div className="mt-3 flex items-center space-x-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                markAsRead(notification.id);
                              }}
                              className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center"
                            >
                              <Check className="h-3 w-3 mr-1" />
                              Mark as read
                            </button>
                            <button className="text-xs font-medium text-gray-500 hover:text-gray-700">
                              View details
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
