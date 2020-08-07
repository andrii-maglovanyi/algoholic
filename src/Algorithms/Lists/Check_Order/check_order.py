
# O(n) time
# O(1) space


def check_orders(take_out_orders, dine_in_orders, served_orders):
    take_out_order_index = 0
    dine_in_order_index = 0

    if len(take_out_orders) + len(dine_in_orders) != len(served_orders):
        return False

    for i in served_orders:
        if len(take_out_orders) > take_out_order_index and i == take_out_orders[take_out_order_index]:
            take_out_order_index += 1

        elif len(dine_in_orders) > dine_in_order_index and i == dine_in_orders[dine_in_order_index]:
            dine_in_order_index += 1

        else:
            return False

    return True
