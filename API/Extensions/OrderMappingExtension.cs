using API.DTOs;
using Core.Entities.OrderAggregate;

namespace API.Extensions;

public static class OrderMappingExtension
{
    public static OrderDto MapToOrderDto(this Order order)
    {
        return new OrderDto
        {
            Id = order.Id,
            BuyerEmail = order.BuyerEmail,
            OrderDate = order.OrderDate,
            ShippingAddress = order.ShippingAddress,
            PaymentSummary = order.PaymentSummary,
            DeliveryMethod = order.DeliveryMethod.Description,
            ShippingPrice = order.DeliveryMethod.Price,
            OrderItems = order.OrderItems.Select(x => x.MapToOrderItemDto()).ToList(),
            SubTotal = order.SubTotal,
            Discount = order.Discount,
            Total = order.GetTotal(),
            OrderStatus = order.OrderStatus.ToString(),
            PaymentIntentId = order.PaymentIntentId
        };
    }

    public static OrderItemDto MapToOrderItemDto(this OrderItem orderItem)
    {
        return new OrderItemDto
        {
            ProductId = orderItem.ItemOrdered.ProductId,
            ProductName = orderItem.ItemOrdered.ProductName,
            PictureUrl = orderItem.ItemOrdered.PictureUrl,
            Price = orderItem.Price,
            Quantity = orderItem.Quantity
        };
    }
}
